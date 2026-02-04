import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './select.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
  disabled = false,
  children,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Parse options from children if provided
  const parsedOptions: SelectOption[] = React.useMemo(() => {
    if (options.length > 0) return options;
    
    const opts: SelectOption[] = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === 'option') {
        opts.push({
          value: child.props.value || child.props.children,
          label: child.props.children,
        });
      }
    });
    return opts;
  }, [options, children]);

  // Use controlled value directly
  const selectedValue = value || '';
  const selectedOption = parsedOptions.find((opt) => opt.value === selectedValue);

  // Update dropdown position when opening
  useEffect(() => {
    if (isOpen && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const currentIndex = parsedOptions.findIndex(
            (opt) => opt.value === selectedValue
          );
          const nextIndex = Math.min(currentIndex + 1, parsedOptions.length - 1);
          handleSelect(parsedOptions[nextIndex].value);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          const currentIndex = parsedOptions.findIndex(
            (opt) => opt.value === selectedValue
          );
          const prevIndex = Math.max(currentIndex - 1, 0);
          handleSelect(parsedOptions[prevIndex].value);
        }
        break;
    }
  };

  return (
    <>
      <div
        ref={selectRef}
        className={`select-pixel ${isOpen ? 'select-open' : ''} ${disabled ? 'select-disabled' : ''} ${className}`}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
      >
        <div
          className="select-trigger"
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <span className={selectedOption ? '' : 'select-placeholder'}>
            {selectedOption?.label || placeholder}
          </span>
          <span className="select-arrow">{isOpen ? '▲' : '▼'}</span>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className="select-dropdown-portal"
            style={{
              position: 'absolute',
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: `${dropdownPosition.width}px`,
              zIndex: 9999,
            }}
          >
            {parsedOptions.map((option) => (
              <div
                key={option.value}
                className={`select-option ${option.value === selectedValue ? 'select-option-selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(option.value);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}

import React from 'react';
import { Input, Select, Checkbox } from '@les-ui/pixel';

export type PropType = 'select' | 'boolean' | 'text' | 'number';

export interface PropConfig<T = any> {
  type: PropType;
  options?: Array<{ value: T; label: string }>;
  default: T;
  label: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface PropsControlProps {
  props: Record<string, any>;
  config: Record<string, PropConfig>;
  onChange: (props: Record<string, any>) => void;
}

export function PropsControl({
  props,
  config,
  onChange,
}: PropsControlProps) {
  const handleChange = (key: string, value: any) => {
    onChange({ ...props, [key]: value });
  };

  return (
    <div className="props-control">
      <h4 className="props-control-title">Props</h4>
      <div className="props-control-list">
        {Object.entries(config).map(([key, propConfig]) => {
          const value = props[key];

          return (
            <div key={String(key)} className="prop-control-item">
              <label className="prop-control-label">{propConfig.label}</label>
              {propConfig.description && (
                <p className="prop-control-description">
                  {propConfig.description}
                </p>
              )}
              <div className="prop-control-input">
                {propConfig.type === 'select' && propConfig.options && (
                  <Select
                    value={value}
                    onChange={(val) => handleChange(key, val)}
                    options={propConfig.options}
                    placeholder={propConfig.label}
                  />
                )}
                {propConfig.type === 'boolean' && (
                  <Checkbox
                    checked={value}
                    onChange={(e) => handleChange(key, e.target.checked)}
                    label={String(value)}
                  />
                )}
                {propConfig.type === 'text' && (
                  <Input
                    value={value as string}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={propConfig.label}
                  />
                )}
                {propConfig.type === 'number' && (
                  <Input
                    type="number"
                    value={value as number}
                    onChange={(e) =>
                      handleChange(key, Number(e.target.value))
                    }
                    min={propConfig.min}
                    max={propConfig.max}
                    step={propConfig.step || 1}
                    placeholder={propConfig.label}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

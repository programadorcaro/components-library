import type { StoryObj } from '@storybook/react';
import Table from '../table/index';
declare const meta: {
    title: string;
    component: typeof Table;
    parameters: {
        layout: string;
        docs: {
            source: {
                type: string;
                language: string;
            };
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const CustomRendering: Story;
export declare const Interactive: Story;
export declare const Empty: Story;
export declare const ManyColumns: Story;

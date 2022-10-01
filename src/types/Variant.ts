export type Variant = {
    id: number;
    title: string
    onClick: () => void;
    price: number;
    image: string;
    isDefault: boolean;
    description?: string;
}
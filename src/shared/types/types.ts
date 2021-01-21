export interface WithChildren {
    children?: JSX.Element | JSX.Element[];
};

export interface Switchable {
    isLight: boolean;
    click: () => void;
}

export interface Grid extends WithChildren {
    marginBottom?: boolean;
    subGrid?: boolean;
};

export interface GridItem extends WithChildren {
    title?: string;
}

export interface Link {
    link?: string;
    target?: string;
    download?: boolean;
    children: string;
};

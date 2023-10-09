import React, {ReactElement, ReactNode, useRef, useState} from 'react';
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface AccordionProps {
    children: ReactElement[]
}
export const Accordion: React.FC<AccordionProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const handleItemClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    };

    return (
        <div>
        {children.map((item, index) => {
            return (
                <Item
                    key={index}
                    title={item.props.title}
                    children={item.props.children}
                    open={activeIndex === index}
                    click={() => handleItemClick(index)}
                />
            )})}
        </div>
    )
};

interface AccordionItemProps {
    title: ReactNode
    children: ReactElement
}

export const AccordionItem: React.FC<AccordionItemProps> = () => null;

interface ItemProps extends AccordionItemProps {
    title: React.ReactNode
    open: boolean
    click: React.MouseEventHandler
}

const Item: React.FC<ItemProps> = ({ title, open, click, children }) => {
    const contentSpace = useRef<HTMLDivElement>(null)

    return (
        <div className="flex flex-col">
            <button
                className="py-4 box-border appearance-none cursor-pointer focus:outline-none flex items-center"
                onClick={click}
            >
                <ChevronRightIcon
                    className={`${open 
                        ? 'transform duration-700 ease rotate-90' 
                        : 'transform duration-700 ease'} 
                        flex-none h-5 w-5 mr-2 text-white-400`}
                    aria-hidden='true'
                />
                <p className="inline-block text-footnote font-medium">{title}</p>
            </button>
            <div
                ref={contentSpace}
                style={open ? { maxHeight: `${contentSpace?.current?.scrollHeight}px` } : { maxHeight: `0px` }}
                className="overflow-auto transition-max-height duration-700 ease-in-out"
            >
                <div className="pb-5">{children}</div>
            </div>
        </div>
    )
};



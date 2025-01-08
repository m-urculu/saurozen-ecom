import React, { useState } from "react";
import * as Icons from "@/../public/icons";

const Filter = () => {
    const [isExpanded, setIsExpanded] = useState(false); // State to manage the filter's expanded state
    const [isClicked, setIsClicked] = useState(false);

    const toggleFilter = () => {
        setIsExpanded(!isExpanded);
        setIsClicked(true);
        console.log(`Expanded: ${isExpanded}`)
    };
    return (
        <>
              <div className={`filter ${
                    isClicked ? (isExpanded ? "expand" : "hide") : ""
                }`}>
                <div className={`filter-head ${isExpanded ? "moveOut" : "moveIn"}`}>
                    <p className={`filter-title ${
                    isClicked ? (isExpanded ? "block" : "hidden") : "hidden"
                }`}>FILTERS</p>
                    <button
                        className={`filter-button-container ${
                            isClicked ? (isExpanded ? "" : "moveIn") : ""
                        }`}
                        onClick={toggleFilter}
                    >
                        <img
                            src={Icons.sliders.src}
                            alt="Sliders Icon"
                            className="sliders-button"
                        />
                    </button>
                </div>
                <div className="filter-animation">
                    <div className="filter-line"></div>
                    <div className="types">
                        <button className="type">
                            <p className="type-name">Classic</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                            />
                        </button>
                        <button className="type">
                            <p className="type-name">Sport</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                            />
                        </button>
                        <button className="type">
                            <p className="type-name">Wrap</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                            />
                        </button>
                        <button className="type">
                            <p className="type-name">Aviator</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                            />
                        </button>
                        <button className="type">
                            <p className="type-name">Clubmaster</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                            />
                        </button>
                    </div>
                    <div className="filter-line"></div>
                    <div className="filter-price">
                        <button className="title-container">
                            <p className="filters-title">PRICE</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter-down"
                            />
                        </button>
                        <div className="price-slider">
                            <div className="slider-bar">
                                <div className="min-slider-container">
                                    <button className="min-price-slide"></button>
                                    <div className="price-min">50€</div>
                                </div>
                                <div className="slider-bar-range"></div>
                                <div className="max-slider-container">
                                    <button className="max-price-slide"></button>
                                    <div className="price-max">200€</div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-line"></div>
                    </div>
                    <div className="filter-colors">
                        <button className="title-container">
                            <p className="filters-title">COLORS</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter-down"
                            />
                        </button>
                        <div className="colors-selection">
                            <div className="sel-row">
                                <div className="sel-orange">
                                    <img
                                        src={Icons.check.src}
                                        alt="Checked Icon"
                                        className="checked"
                                    />
                                </div>
                                <div className="sel-magenta"></div>
                                <div className="sel-lime"></div>
                                <div className="sel-black"></div>
                                <div className="sel-white"></div>
                            </div>
                            <div className="sel-row">
                                <div className="sel-pink"></div>
                                <div className="sel-yellow"></div>
                                <div className="sel-green"></div>
                                <div className="sel-cian"></div>
                                <div className="sel-red"></div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-line"></div>
                    <div className="filter-size">
                        <button className="title-container">
                            <p className="filters-title">SIZE</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter-down"
                            />
                        </button>
                        <div className="size-selection">
                            <button className="size-button">SMALL</button>
                            <button className="size-button">MEDIUM</button>
                            <button className="size-button">LARGE</button>
                        </div>
                    </div>
                    <div className="filter-line"></div>
                    <div className="filter-collection">
                        <button className="title-container">
                            <p className="filters-title">COLLECTION</p>
                            <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter-down"
                            />
                        </button>
                        <div className="types">
                            <button className="type">
                                <p className="type-name">Coral Horizon</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                />
                            </button>
                            <button className="type">
                                <p className="type-name">Neon Tides</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                />
                            </button>
                            <button className="type">
                                <p className="type-name">Aqua Future</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                />
                            </button>
                            <button className="type">
                                <p className="type-name">Sea Change</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                />
                            </button>
                            <button className="type">
                                <p className="type-name">Eclipse Waters</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="apply-button">APPLY FILTER</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;

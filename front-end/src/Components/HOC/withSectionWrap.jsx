import React, { useRef } from "react";
import SectionTitle from "../Ui/TitleText/SectionTitle";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const withSectionWrap = (WrappedComponent, props) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.nextRef = React.createRef();
            this.prevRef = React.createRef();
        }
        render() {
            return (
                <section className=" mt-20 lg:mt-32 xl:mt-40 2xl:mt-52 ">
                    <div className=" max-w-max-boundry mx-auto">
                        {/* title  */}
                        <div className=" mx-auto mb-6 sm:mb-8 lg:mb-10 2xl:mb-14 ">
                            <div
                                className=" px-3 w-full flex items-center justify-between
                             xl:px-0 xl:grid xl:grid-cols-cus-12 2xl:grid-cols-12 "
                            >
                                <SectionTitle className=" lg:col-start-2 lg:col-span-7 ">
                                    {props.title}
                                </SectionTitle>
                                {/* right side btns  */}
                                {props.slider ? (
                                    <div className=" hidden sm:block xl:col-start-11 xl:justify-self-end ">
                                        <button
                                            ref={this.nextRef}
                                            className=" cursor-pointer mr-2 "
                                        >
                                            <AiOutlineLeft className=" text-4xl " />
                                        </button>
                                        <button
                                            ref={this.prevRef}
                                            className=" cursor-pointer mr-2 "
                                        >
                                            <AiOutlineRight className=" text-4xl " />
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        {/* slider  */}
                        <div className=" px-3 border-y xl:px-0 ">
                            <WrappedComponent
                                {...props}
                                nextBtn={this.nextRef}
                                prevBtn={this.prevRef}
                            />
                        </div>
                    </div>
                </section>
            );
        }
    };
};

export default withSectionWrap;

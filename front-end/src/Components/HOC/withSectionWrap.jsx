import React from "react";
import SectionTitle from "../Ui/TitleText/SectionTitle";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const withSectionWrap = (WrappedComponent, props) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <section className=" mt-20 lg:mt-32 ">
                    <div className=" max-w-max-boundry mx-auto">
                        {/* title  */}
                        <div className=" px-3 mx-auto mb-6 sm:mb-8 ">
                            <div className=" w-full flex items-center justify-between xl:grid lg:grid-cols-12 ">
                                <SectionTitle className=" lg:col-start-2 lg:col-span-7 ">
                                    {props.title}
                                </SectionTitle>
                                {/* right side btns  */}
                                {props.slider ? (
                                    <div className=" hidden sm:block xl:col-start-11 xl:justify-self-end ">
                                        <button className=" cursor-pointer mr-2 ">
                                            <AiOutlineLeft className=" text-4xl " />
                                        </button>
                                        <button className=" cursor-pointer mr-2 ">
                                            <AiOutlineRight className=" text-4xl " />
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        {/* slider  */}
                        <div className=" px-3 border-y xl:px-0 ">
                            <WrappedComponent {...props} />
                        </div>
                    </div>
                </section>
            );
        }
    };
};

export default withSectionWrap;

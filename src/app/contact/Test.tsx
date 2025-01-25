const Test = () => {
    return (
        <>
            {/*    NavBar*/}
            <div className={"flex flex-row justify-between w-full"}>
                <div>
                    {/*    Logo*/}
                </div>
                <div>
                    {/*    Account*/}
                </div>
            </div>

        {/* Content */}
            <div className={"flex flex-row justify-between w-full min-h-[xyz]"}>
                <div className={"w-1/2 h-full flex flex-col justify-center items-center gap-4"}>
                    {/*    Left Dash*/}

                    {/*Download*/}
                    <div className={"flex flex-row justify-between items-center"}>
                        {/*  Icon and Text*/}
                        <div className={"flex flex-row gap--1"}>
                            <Icon/>
                            <div className={"flex flex-col"}>
                                <p>
                                    Download Sample Template
                                </p>
                                <p>
                                    You can down......
                                </p>
                            </div>
                        </div>

                        <a className={"flex flex-row px-1 py-2 bg-red shadow justify-center items-center gap-2"}>
                            <Icon/>
                            <p>
                                Download
                            </p>
                        </a>
                    </div>

                    {/*Upload*/}
                    <div className={"flex flex-row justify-between items-center"}>
                        {/*  Icon and Text*/}
                        <div className={"flex flex-row gap--1"}>
                            <Icon/>
                            <div className={"flex flex-col"}>
                                <p>
                                    Upload Sample Template
                                </p>
                                <p>
                                    You can up......
                                </p>
                            </div>
                        </div>

                        <a className={"flex flex-row px-1 py-2 bg-red shadow justify-center items-center gap-2"}>
                            <Icon/>
                            <p>
                                Upload
                            </p>
                        </a>
                    </div>

                </div>
                <div className={"w-1/2 h-full flex flex-col justify-center items-center gap-12 bg-gray"}>
                    {/*    Right Dash*/}
                    <div className={"flex flex-col gap-2 bg-white"}>
                        {/*    Loading Item*/}
                        <Loader/>
                        <p>
                            Upload Successflly
                        </p>
                    </div>

                    {/*Error*/}
                    <div className={"flex flex-row justify-between items-center"}>
                        {/*  Icon and Text*/}
                        <div className={"flex flex-row gap--1"}>
                            <Icon/>

                            <p>
                                Download Sample Template
                            </p>


                        </div>

                        <a className={"flex px-1 py-2 bg-red shadow justify-center items-center"}>
                            <Icon/>
                        </a>
                    </div>

                    {/*Calculate Data*/}
                    <div className={"flex flex-row justify-between items-center"}>
                        {/*  Icon and Text*/}
                        <div className={"flex flex-row gap--1"}>
                            <Icon/>
                            <div className={"flex flex-col"}>
                                <p>
                                    Download Sample Template
                                </p>
                                <p>
                                    You can down......
                                </p>
                            </div>
                        </div>

                        <a className={"flex flex-row px-1 py-2 bg-red shadow justify-center items-center gap-2"}>
                            <Icon/>
                            <p>
                                Download
                            </p>
                        </a>
                    </div>


                </div>


            </div>
        </>

    )
}

export default Test;
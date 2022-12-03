const Projects = () => {

    const projects = [
        {
            title: 'Project 1',
            duration: '3 months',
            type: 'Collaborative',
            demo: 'https://www.google.com',
            github: 'https://www.github.com',
        },
        {
            title: 'Project 2',
            duration: '2 months',
            type: 'Individual',
            demo: 'https://www.google.com',
            github: 'https://www.github.com',
        }
    ]

    return <>
        <div className={'container mx-auto flex flex-col items-center gap-4'}>
            <h1 className={'text-4xl text-black font-bold'}>Projects</h1>
            <div className={'mt-4  w-4/5'}>
                <table className="table-auto border-collapse border border-slate-500 w-full">
                    <thead className={' w-full'}>
                        <tr>
                            <th className={'border border-black'}>Title</th>
                            <th className={'border border-black'}>Duration</th>
                            <th className={'border border-black'}>Type</th>
                            <th className={'border border-black'}>Demo</th>
                            <th className={'border border-black'}>Source</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        projects.map((project, index) => {
                            return (
                                <tr key={index}>
                                    <td className={'w-1/5 text-center border border-black'}>{project.title}</td>
                                    <td className={'w-1/5 text-center border border-black'}>{project.duration}</td>
                                    <td className={'w-1/5 text-center border border-black'}>{project.type}</td>
                                    <td className={'w-1/5 text-center border border-black'}>
                                        <a
                                            href={project.demo}
                                            className={'text-blue-500'}
                                        >
                                            Click here
                                        </a>
                                    </td>
                                    <td
                                        className={'w-1/5 text-center border border-black'}
                                    >
                                        <a
                                            href={project.github}
                                            className={'text-blue-500'}
                                        >
                                            Click here
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default Projects
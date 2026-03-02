import AddIcon from '@mui/icons-material/Add';

const AddTask = () => {
    return (
        <>
            <div
                className="cursor-pointer w-[220px] flex items-center justify-center
             rounded-lg px-2 py-1 m-2
             bg-white/15
             backdrop-blur-sm
             border border-white/20
             shadow-md shadow-black/10
             text-white/90
             covered-by-your-grace-regular
             transition hover:bg-white/20"
                onClick={addTask}
            >
                <AddIcon className="mr-2" />
                Add another task
            </div>
        </>
    )
}

const addTask = () => {
    console.log("add task")
}

export default AddTask;
import React, {useEffect, useState} from "react";

export function StatusFilter({selectedStatus, handler}) {
    const [statuses, setStatuses] = useState([])

    const getData = async () => {
        const res = await fetch('/api/statuses')
        const data = await res.json()
        setStatuses(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return <div className='select-filter'>
        {statuses.map((status) =>
            <button key={status.id} onClick={() => handler(status.id)}
                    className={selectedStatus === status.id ?
                        "status-filter__status_selected" :
                        "status-filter__status"}>{status.name}</button>)}
    </div>
}

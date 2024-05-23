export class Train {
    constructor(dep) {
        this.objInfo = dep;
        this.time = `${dep.time.hrs}:${dep.time.mins}`;
        this.name = dep.train;
        this.number = dep.no;
        this.destination = dep.to;
        this.status = dep.status || "---"
        this.track = dep.track || "---"
    }

    getElement(dep) {
        const widget = document.createElement("table")
        widget.classList.add("widget")
        widget.innerHTML = `
            <tr>
                <th>Time</th>
                <th>#</th>
                <th>Train</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Track</th>
            </tr>
            <tr>
                <td>${this.time}</td>
                <td>${this.name}</td>
                <td>${this.number}</td>
                <td>${this.destination}</td>
                <td>${this.status}</td>
                <td>${this.track}</td>
            </tr>`

        return widget
    }
}





export class ProgressBar {
    constructor(color) {
        this.value = 0;
        this.gradient = 1;
        this.maxValue = 17;
        this.element = document.createElement('div');
        this.createElement(color)
    }

    createElement(color) {
        this.element.innerHTML = `
          <div class="label">
            ${this.value}/${this.maxValue}
          </div>
          <div class="progress">
             <div class="btn-minus" data-color=${color}></div>
             <div class="bar">
               <div style="width: ${this.value / this.maxValue * 100}%" class="knob"></div>
             </div>
             <div class="btn-plus" data-color=${color}></div>
          </div>
        `;
        const plusBtn = this.element.querySelector('.btn-plus');
        plusBtn.addEventListener('click', () => {
            this.value = Math.min(this.maxValue, this.value + this.gradient);
            this.refreshElement(color);
        });

        const minusBtn = this.element.querySelector('.btn-minus');
        minusBtn.addEventListener("click", () => {
            this.value = Math.max(0, this.value - this.gradient);
            this.refreshElement(color);
        })
    }
    refreshElement() {
        this.element.querySelector(".knob").style.width = `${this.value / this.maxValue * 100}%`
        this.element.querySelector(".label").innerHTML = `${this.value}/${this.maxValue}`
    }
}

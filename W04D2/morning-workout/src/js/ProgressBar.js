export class ProgressBar {
  constructor() {
    this.value = 0;
    this.gradient = 1;
    this.maxValue = 10;
    this.element = document.createElement('div');
    this.refreshElement();

    //@TODO no.4
    //  make it possible to create progress bar with any default value.
    //  this value should be passed to constructor

    //@TODO no.5
    //  go back to script.js and create more progressBars, see how easy it is to reuse this component
  }

  refreshElement() {
    this.element.innerHTML = `
      <div class="label">
        ${this.value}/${this.maxValue}
      </div>
      <div class="progress">
         <div class="btn-minus"></div>
         <div class="bar">
           <div style="width: ${this.value / this.maxValue * 100}%" class="knob"></div>
         </div>
         <div class="btn-plus"></div>
      </div>
    `;

    const plusBtn = this.element.querySelector('.btn-plus');
    plusBtn.addEventListener('click', () => {
      this.value = Math.min(this.maxValue, this.value + this.gradient);
      this.refreshElement();
    });

    const minusBtn = this.element.querySelector('.btn-minus');
    //@TODO no.3
    //  implement logic for minus button. if you decrease the value, make sure, it is not less then 0
  }
}

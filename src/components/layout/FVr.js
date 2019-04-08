export default {
  description: `
Vertical separator line

<f-vr/>  
  `,
  template: `
  <div style="
    display: flex;
    height: 100%;
    justify-content: center;
  ">
  <div style="
    display: flex;
    width: 0;
    border-left: 1.5px solid var(--primary);
    border-right: 1.5px solid var(--primary);
    height: 100%;
  ">
  &nbsp;
  </div>
  </div>
  `
};
// https://calculator.swiftutors.com/radius-of-a-sphere-calculator.html#tabs-2

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const byEquatorialCircumferenceRadio = document.getElementById('byEquatorialCircumferenceRadio');
const bySurfaceAreaRadio = document.getElementById('bySurfaceAreaRadio');
const byVolumeRadio = document.getElementById('byVolumeRadio');

let equatorialCircumference = v;
const PI = Math.PI;
let surfaceAreaofSphere;
let volumeofSphere;

// labels of the inpust
const variable = document.getElementById('variable');

byEquatorialCircumferenceRadio.addEventListener('click', function() {
  variable.textContent = 'Equatorial Circumference';
  equatorialCircumference = v;
  result.textContent = '';
});

bySurfaceAreaRadio.addEventListener('click', function() {
  variable.textContent = 'Surface Area of Sphere';
  surfaceAreaofSphere = v;
  result.textContent = '';
});

byVolumeRadio.addEventListener('click', function() {
  variable.textContent = 'Volume of Sphere';
  volumeofSphere = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(byEquatorialCircumferenceRadio.checked)
    result.textContent = `Radius of Sphere = ${computeByEquatorialCircumference().toFixed(2)}`;

  else if(bySurfaceAreaRadio.checked)
    result.textContent = `Radius of Sphere = ${computeBySurfaceAreaofSphere().toFixed(2)}`;

  else if(byVolumeRadio.checked)
    result.textContent = `Radius of Sphere = ${computeByVolumeofSphere().toFixed(2)}`;
})

// calculation

function computeByEquatorialCircumference() {
  return Number(equatorialCircumference.value) / (2 * PI);
}

function computeBySurfaceAreaofSphere() {
  return Math.sqrt(Number(surfaceAreaofSphere.value) / (4 * PI));
}

function computeByVolumeofSphere() {
  return Math.pow((3 * Number(volumeofSphere.value)) / (4 * PI), 1/3);
}
function solve() {
  //1.Get the Elements containing input
  let textElement = document.querySelector(`#text`);
  let namingConventionElement = document.querySelector("#naming-convention");

  //2.Extract/Parse input data
  let text=textElement.value;
  let namingConvention=namingConventionElement.value;

  //3.Main logic

  let result=applyNamingConvention(text,namingConvention);

  //4.Display result in DOM
  let spanElement=document.getElementById('result');
  spanElement.textContent=result;


  function applyNamingConvention(text, convention){
    const conventionSwitch={
      'Pascal Case': () => text.toLowerCase()
      .split(' ')
      .map(x=>x[0].toUpperCase()+x.slice(1))
      .join(``),

      'Camel Case': () => text.toLowerCase()
      .split(' ')
      .map((x,i)=>x=i !==0 ? x[0].toUpperCase()+x.slice(1):x)
      .join(``),
      default: () => 'Error!'
    };

   return (conventionSwitch[convention] || conventionSwitch.default) ();

  }
}
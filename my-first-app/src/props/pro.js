export default function Pro(props){
    const {a}=props;
    return(
        <>
        <h1>NAME: {a.name}</h1>
         <h1>DOB: {a.DOB}</h1>
         <h1>AGE: {a.age}</h1>
         <h1>DEGREE: {a.degree}</h1>
         <h1>LANG: {a.lang}</h1>
        </>
    );
}
export default function Gallery(){
    return (
        <section>
            <h1>Amazing Students</h1>
            <Profile/>
            <Profile/>
            <Profile/>

        </section>
    );

} 

function Profile(){
    return(
        <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg"
        alt = "Cats"
        style ={{width: 500}}
        />
        
    );
}
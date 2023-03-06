import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
       <header>
        
        <nav>
            <ul>
                <li>
                <Link to={"/about"}>About</Link>
                </li>
                <li>
                <Link to={"/contact"}>contact me</Link>
                </li>
                <li>
                <Link to={"/"}>Home</Link>
                </li>
               

            </ul>
        </nav>
       </header>
       <section>
        <h1>
            HOME
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint libero ad possimus dolorum similique eaque labore amet at quae itaque molestias quam molestiae, ipsa, dolorem facere id eius? Amet.
        Repellendus aliquam voluptatem cum dicta tempora accusantium totam suscipit, perferendis impedit minus consequatur inventore dolore facilis maiores illo debitis magni eaque aspernatur voluptas tempore sunt ipsa? Libero sint sunt quisquam.
        Vero quia nisi ad animi doloribus, deleniti dolores tempore debitis quaerat omnis mollitia illo unde sunt praesentium. Tempore, esse, eius inventore aliquam culpa voluptatum recusandae excepturi quidem iste odio blanditiis?
        Autem, neque voluptas. Beatae laboriosam quas odit maxime voluptatibus incidunt perspiciatis est, aliquam quidem sit! Laboriosam impedit rem ullam nesciunt eaque sunt unde iusto eius illum saepe. Iste, voluptate inventore.
        Cum aperiam repellat, provident reiciendis cupiditate obcaecati maxime doloremque ea deleniti rem autem, excepturi in at. Maxime rerum, laudantium aspernatur, excepturi corrupti quae repellat consequuntur nobis aliquid voluptate, quas cumque!
        Laboriosam quod velit minima deleniti recusandae qui reprehenderit aliquid, repellat excepturi odio voluptatem explicabo quis at iste natus est accusantium obcaecati voluptates veritatis consectetur hic fugit, necessitatibus ducimus. Pariatur, rerum?
        Quos magni obcaecati impedit molestias possimus ipsum dicta veniam esse nostrum! Vel repellendus earum sed et ducimus dolores, quo nam nostrum tempore voluptatum veritatis, saepe ut cupiditate rem ratione qui!
        Ratione quae quam voluptates in voluptas, sapiente, odio sit soluta ab necessitatibus, dolore esse consequuntur suscipit molestiae eveniet amet inventore repellat? Amet voluptatibus impedit adipisci minus soluta molestias sequi in.
        Vero, tempora quasi maiores explicabo accusamus quibusdam reprehenderit consequuntur facilis velit suscipit accusantium! Voluptatum beatae unde tenetur animi veniam dolorum, porro, officiis, possimus quo dolores minus. Architecto non officiis maxime!
        Velit blanditiis distinctio corporis dolore, recusandae laudantium, nam id animi itaque voluptate architecto ab, laborum fugiat quos numquam dignissimos placeat provident commodi odit! Qui, vel inventore architecto in excepturi harum?
       </section>
    </>
  )
}

export default Home

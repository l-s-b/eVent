
import React, { useState, useEffect } from 'react'
import DisplayComments from '../../Comments/DisplayComments/DisplayComments'
import { Link , useParams} from 'react-router-dom'
import  {useDispatch , useSelector} from 'react-redux'
import {getEventDetail} from '../../../actions/actions'
import { Carousel } from 'react-carousel-minimal';
import Loading from '../../Loading/Loading'
import styles from './EventDetailsUsario.module.css'
// import Logo from '../../../Utilities/logodivinacodi.gif'
// import eVent from '../../../Utilities/eVent-05.svg'

const pushDta=(detailsEvent)=>{
    let data = [];
    let picture = detailsEvent.result?.pictures

    for (let index = 0; index < picture?.length; index++) {
        data.push({image:picture[index],caption:detailsEvent.result.description})
    }
    return data;
}
//Diego: Componente que muestra los detalles de un evento para el tipo Usuario.
export default function EventDetailsUsario() {

<<<<<<< HEAD
    // Diego: Variable solo para que no tire Warning en la consola sobre unique keys
        const [render, setRender] = useState(false)
        const dispatch = useDispatch()
        const params =useParams()
        const [data , setData] = useState();
        const {id} = params;
        const detailsEvent = useSelector(state => state.detailsEvent)
=======
>>>>>>> 2952d9b2e2fc6b317072c9c8ae22b0cb70401c61

    const [render, setRender] = useState(false)
    const [data , setData] = useState()
    const dispatch = useDispatch()
    const params =useParams()
    const {id}=params
    const detailsEvent = useSelector(state => state.detailsEvent)


    useEffect( () => {
        const fetchData = async () => {
            try{
                await dispatch(getEventDetail(id))
                setRender(true)
            }catch(error){
                alert('intentalo mas tarde')
            }
<<<<<<< HEAD
        },[id])

        const logo = Logo
        console.log('soy logo',logo)
        const event = eVent
        console.log('soy event ',event)

        const slideNumberStyle = {
            fontSize: '20px',
            fontWeight: 'bold',
=======
>>>>>>> 2952d9b2e2fc6b317072c9c8ae22b0cb70401c61
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    // const  logo = Logo
    // const event = eVent

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    useEffect(()=>{
        setData(pushDta(detailsEvent))
    },[detailsEvent])

    if(render){
            return(
            <div className={styles.detailsAllUser}>
                         <h1 className={styles.titleCard}>{detailsEvent.result.name}</h1>
                         <div className={styles.detailContainer}>
                        <div className={styles.carousel}>
                            <Carousel
                                data={data}
                                time={5000}
                                width="650px"
                                height="400px"
                                radius="10px"
                                //captionStyle={captionStyle}
                                slideNumber={true}
                                slideNumberStyle={slideNumberStyle}
                                captionPosition="bottom"
                                automatic={true}
                                dots={false}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="darkgrey"
                                slideImageFit="auto"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    maxWidth: "650px",
                                    maxHeight: "450px",
                                    margin: "40px auto",
                                }} />
                        </div>
                        <div className={styles.otherDetailsUser}>
                            <br/>
                            <h4 className='h4'>Descripcion:</h4>
                            <p className={styles.description}>{ detailsEvent.result.description}</p>
                            <div className={styles.detailsUsers2User}>
                                <div className={styles.leftColumn}>
                                    <h4 className='h4'>Artistas:</h4>
                                    <span>{` ${detailsEvent.result.starring}`}</span>
                                    <h4 className='h4'>Dirreción:</h4>
                                    <span> {` ${detailsEvent.result.address}`}</span>
                                    <h4 className='h4'>Fecha:</h4>
                                    <span>{` ${detailsEvent.result.start_date}`}</span>
                                    <h4 className='h4'>Fecha Finalización:</h4>
                                    <span>{` ${detailsEvent.result.finish_date}`}</span>
                                    <h4 className='h4'>Dias:</h4>
                                    <span>{` ${detailsEvent.result.weekdays.map((e)=>(e))}`}</span>
                                </div>
                                <div className={styles.rightColumn}>
                                    <h4 className='h4'>Horarios:</h4>
                                    <span>{` ${detailsEvent.result.schedule.map((e)=>(e))}`}</span>
                                    <h4 className='h4'>Tipo de Evento:</h4>
                                    <span>{` ${detailsEvent.result.tags}`}</span>
                                    <h4 className='h4'>Clasificación:</h4>
                                    <span>{` ${detailsEvent.result.age_rating}`}</span>
                                    <h4 className='h4'>Precio:</h4>
<<<<<<< HEAD
                                    <span>{` $${detailsEvent.result.price}`}</span>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.button}>Reservar</button>
                                    <Link to={{
                                        pathname:'/nuevoComentario',
                                        state: id
                                    }}>
                                        <button className={styles.button}>Reseña</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )}
    else {
=======
                                    <p className='p'>{` $${detailsEvent.result.price}`}</p>
                                    <h4>limite de asiastentes:</h4>
                                    <p>{` ${detailsEvent.result.ticket_limit}`}</p>
                                    <h4>Croquis:</h4> {` ${detailsEvent.result.seat_booking} `} 
                                    
                                </div>                                
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}>Reservar</button>
                            <Link to={{
                                pathname:'/nuevoComentario',
                                state: {
                                    id: id,
                                    eventName: detailsEvent.result.name
                                }
                            }}>
                            <button className={styles.button}>Reseña</button>
                            </Link>
                        </div>
                        <div className='comments-container'>
                            <DisplayComments state={id}/>
                            <br />
                            <br />
                        </div>
                    </div>   
                </div>
            </div>      
    )} 
    else{
>>>>>>> 2952d9b2e2fc6b317072c9c8ae22b0cb70401c61
        return (<Loading/>)
    }
}


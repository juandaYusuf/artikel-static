import React, { useContext } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { LeftToRight } from '../../Animations'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../Context'


const HomePage = () => {
    const navigatTo = useNavigate()
    const { setArtikelID } = useContext(UserContext)


    const ReadArtikel = (artikelID) => {
        navigatTo('/read-artikel')
        setArtikelID(artikelID)
    }


    return (
        <>
            <LeftToRight>
                <Container className='d-flex gap-3 flex-wrap justify-content-center'>
                    <Card className='add-item-shadow rounded-4 overflow-hidden' style={{ width: '18rem', backgroundColor: " rgba(255, 255, 255, 0.5)", borderLeft: "solid rgb(255, 255, 255, 0.4) 1px", borderBottom: "solid rgb(255, 255, 255, 0.4) 1px", borderTop: "solid rgba(255, 255, 255, 0.4) 2px", borderRight: "solid rgb(255, 255, 255, 0.4) 1px" }}>
                        <Card.Img variant="top" src="https://i0.wp.com/www.builder.id/wp-content/uploads/2019/10/teknik-pengelasan-mig.jpg?fit=600%2C350&ssl=1" style={{ height: "200px", width: "100%", objectFit: "cover" }} />
                        <Card.Body>
                            <Card.Title>
                                <span className="d-inline-block text-truncate" style={{ maxWidth: "100%" }}>
                                    PENGELASAN
                                </span></Card.Title>
                            <Card.Text className="content-artikels-container" style={{ overflow: "hidden", cursor: "pointer" }}>
                                Metode penyambungan logam telah ada sejak ribuan tahun lalu, yang banyak dilakukan oleh pandai besi yaitu menggunakan metode tempa. Kemudian pada abad ke 19 mulai dikenal pengelasan menggunakan gas oksigen dan gas acetylene yang menghasilkan nyala api yang panas. Bersamaan dengan itu juga dikenal pengelasan yang bersumber dari energi listrik
                            </Card.Text>
                            <Button variant="outline-success w-100" onClick={() => { ReadArtikel(1) }}>Baca artikel</Button>
                        </Card.Body>
                    </Card>

                    <Card className='add-item-shadow rounded-4 overflow-hidden' style={{ width: '18rem', backgroundColor: " rgba(255, 255, 255, 0.5)", borderLeft: "solid rgb(255, 255, 255, 0.4) 1px", borderBottom: "solid rgb(255, 255, 255, 0.4) 1px", borderTop: "solid rgba(255, 255, 255, 0.4) 2px", borderRight: "solid rgb(255, 255, 255, 0.4) 1px" }}>
                        <Card.Img variant="top" src="https://cdn-dannk.nitrocdn.com/axCwrmPgOwatYmZNzJPxvKWzaSdqJadf/assets/static/optimized/rev-a7fb710/wp-content/uploads/2018/07/LT6180.jpg" style={{ height: "200px", width: "100%", objectFit: "cover" }} />
                        <Card.Body>
                            <Card.Title>
                                <span className="d-inline-block text-truncate" style={{ maxWidth: "100%" }}>
                                    Jenis-jenis Mesin Perkakas Konvensional
                                </span></Card.Title>
                            <Card.Text className="content-artikels-container" style={{ overflow: "hidden", cursor: "pointer" }}>
                            Pada artikel kali ini akan dibahas tentang jenis-jenis mesin perkakas konvensional.
                            </Card.Text>
                            <Button variant="outline-success w-100" onClick={() => { ReadArtikel(2) }}>Baca artikel</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </LeftToRight>
        </>
    )
}

export default HomePage
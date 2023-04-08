import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import UserContext from '../../Context'
import { Artikels } from '../../Artikel-Datas/artikel'
import { BottomToTop } from '../../Animations'
import { useNavigate } from 'react-router-dom'

const ReadArtikel = () => {


    const navigateTo = useNavigate()
    const artikels = Artikels().datas
    const { artikelID } = useContext(UserContext)


    useEffect(() => {
        const zeroIdHandle = () => {
            if (artikelID === 0) {
                navigateTo("/")
            }
        }
        zeroIdHandle()
        return () => {
            zeroIdHandle()
        }
    }, [artikelID, navigateTo])



    return (
        <BottomToTop>
            <Container>
                <div className='baca-artikel-container add-item-shadow'>
                    {
                        (artikelID === 1)
                            ?
                            artikels.filter((result) => result.id === artikelID).map((result) => {
                                return (
                                    <>
                                        <h1 className='fw-bold text-uppercase mb-4 mt-4'>{result.judul}</h1>
                                        {/* <h2 className='text-start w-100'>{result.subjudul_1}</h2> */}
                                        <p>{result.p_1}</p>
                                        <h3 className='text-start w-100'>{result.subjudul_2}</h3>
                                        <p>{result.p_2}</p>
                                        <p className='w-100 text-start'>{result.judulpoin_1}</p>
                                        <p className='w-100 text-start'>{result.poin_1}</p>
                                        <p className='w-100 text-start'>{result.poin_2}</p>
                                        <p className='w-100 text-start'>{result.p_3}</p>
                                        <img src={result.gambar_1} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <p className='w-100 text-start'>{result.subjudul_3}</p>
                                        <p className='w-100 text-start'>{result.subsubjudul_1}</p>
                                        <p className='w-100 text-start'>{result.p_4}</p>
                                        <p className='w-100 text-start'>{result.p_5}</p>
                                        <img src={result.gambar_2} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h5 className='text-start w-100'>{result.subsubjudul_2}</h5>
                                        <p className='w-100 text-start'>{result.p_6}</p>
                                        <p className='w-100 text-start'>{result.p_7}</p>
                                        <img src={result.gambar_3} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h5 className='text-start w-100'>{result.subsubjudul_3}</h5>
                                        <p className='w-100 text-start'>{result.p_8}</p>
                                        <img src={result.gambar_4} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <p className='w-100 text-start'>{result.p_9}</p>
                                        <img src={result.gambar_5} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <img src={result.gambar_6} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <p className='w-100 text-start'>{result.p_10}</p>
                                        <img src={result.gambar_7} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h3 className='text-start w-100'>{result.subjudul_4}</h3>
                                        <h5 className='text-start w-100'>{result.subsubjudul_4}</h5>
                                        <p className='w-100 text-start'>{result.p_11}</p>
                                        <img src={result.gambar_8} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h5 className='text-start w-100'>{result.subsubjudul_5}</h5>
                                        <p className='w-100 text-start'>{result.p_12}</p>
                                        <p className='w-100 text-start'>{result.p_13}</p>
                                        <img src={result.gambar_9} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <p className='w-100 text-start'>{result.p_14}</p>
                                        <img src={result.gambar_10} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h5 className='text-start w-100'>{result.subsubjudul_6}</h5>
                                        <p className='w-100 text-start'>{result.p_15}</p>
                                        <img src={result.gambar_11} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h3 className='text-start w-100'>{result.subjudul_5}</h3>
                                        <p className='w-100 text-start'>{result.p_16}</p>
                                        <img src={result.gambar_12} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <p className='w-100 text-start'>{result.p_17}</p>
                                        <img src={result.gambar_13} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <p className='w-100 text-start'>{result.judulpoin_2}</p>
                                        <div className='mx-4'>
                                            <p className='w-100 text-start'> {result.poin_3}</p>
                                            <p className='w-100 text-start'> {result.poin_4}</p>
                                            <p className='w-100 text-start'> {result.poin_5}</p>
                                            <p className='w-100 text-start'> {result.poin_6}</p>
                                            <p className='w-100 text-start'> {result.poin_7}</p>
                                            <p className='w-100 text-start'> {result.poin_8}</p>
                                            <p className='w-100 text-start'> {result.poin_9}</p>
                                            <p className='w-100 text-start'> {result.poin_10}</p>
                                            <p className='w-100 text-start'> {result.poin_11}</p>
                                            <p className='w-100 text-start'> {result.poin_12}</p>
                                            <p className='w-100 text-start'> {result.poin_13}</p>
                                            <p className='w-100 text-start'> {result.poin_14}</p>
                                        </div>
                                        <img src={result.gambar_14} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <div className='mx-4'>
                                            <p className='w-100 text-start'> {result.poin_15}</p>
                                        </div>
                                        <img src={result.gambar_15} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <div className='mx-4'>
                                            <p className='w-100 text-start'>{result.poin_16}</p>
                                        </div>
                                        <img src={result.gambar_16} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                    </>
                                )
                            })
                            :
                            artikels.filter((result) => result.id === artikelID).map((result) => {
                                return (
                                    <>
                                        <h1 className='fw-bold text-uppercase mb-4 mt-4'>{result.judul}</h1>
                                        <p className='w-100 text-start'>{result.p_1}</p>
                                        <p className='w-100 text-start'>{result.p_2}</p>
                                        <p className='w-100 text-start'>{result.p_3}</p>
                                        <p className='w-100 text-start'>{result.p_4}</p>
                                        <p className='w-100 text-start'>{result.p_5}</p>
                                        <p className='w-100 text-start'>{result.p_6}</p>
                                        <p className='w-100 text-start'>{result.p_7}</p>
                                        <div className='px-4 w-100'>
                                            <p className='w-100 text-start'> {result.poin_1}</p>
                                            <p className='w-100 text-start'> {result.poin_2}</p>
                                            <p className='w-100 text-start'> {result.poin_3}</p>
                                            <p className='w-100 text-start'> {result.poin_4}</p>
                                        </div>
                                        <h3 className='text-start w-100'>{result.subjudul_1}</h3>
                                        <p className='w-100 text-start'> {result.p_8}</p>
                                        <p className='w-100 text-start'> {result.p_9}</p>
                                        <img src={result.gambar_1} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h3 className='text-start w-100'>{result.subjudul_2}</h3>
                                        <p className='w-100 text-start'> {result.p_10}</p>
                                        <img src={result.gambar_2} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h3 className='text-start w-100'>{result.subjudul_3}</h3>
                                        <p className='w-100 text-start'> {result.p_11}</p>
                                        <img src={result.gambar_3} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                        <h3 className='text-start w-100'>{result.subjudul_4}</h3>
                                        <p className='w-100 text-start'> {result.p_12}</p>
                                        <img src={result.gambar_4} className=' m-4 rounded-4 add-item-shadow' alt=" " />
                                    </>
                                )
                            })

                    }

                </div>
            </Container>
        </BottomToTop>
    )
}

export default ReadArtikel
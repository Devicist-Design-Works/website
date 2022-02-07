import React from 'react'
import { GalleryContainer, Column1, Column2, ActivePhoto, PhotoGrid, Thumbnail } from './GalleryElements'

const GallerySection = () => {
    return (
        <>
          <GalleryContainer>
             <Column1>
             <ActivePhoto></ActivePhoto>
             <PhotoGrid>
                 <Thumbnail/>
                 <Thumbnail/>
                 <Thumbnail/>
                 <Thumbnail/>
                 <Thumbnail/>
                 <Thumbnail/>
                 <Thumbnail/>
                 <Thumbnail/>
             </PhotoGrid>
             </Column1>
             <Column2>
             <h1>Description Text goes here</h1>
             </Column2>
          </GalleryContainer>
        </>
    )
}

export default GallerySection

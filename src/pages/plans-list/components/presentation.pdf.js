import React from 'react'
import { FaDownload } from 'react-icons/fa'
import jsPDF from 'jspdf'
import CustomButton from 'src/@core/components/CustomButton'
import { Card } from '@mui/material'

export default function PresentationSubComponent({ displayValue }) {
  const handleGeneratePdf = () => {
    const docToDownload = document.getElementById('presentation')

    const doc = new jsPDF({
      orientation: 'portrait',
      format: [297, 210]
    })

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal')

    doc.html(docToDownload, {
      html2canvas: {
        scale: 0.2945
      },
      callback: function (doc) {
        doc.save('html-to-pdf.pdf')
      }
    })
  }

  return (
    <Card
      sx={{
        padding: 8
      }}
    >
      <CustomButton
        text={'Download Presentation'}
        variant='contained'
        actionCallBack={() => handleGeneratePdf()}
        style={{
          margin: 'auto'
        }}
      />
      <br />
      <div id='presentation'>
        <div className='branding'>
          <p>This is personalized presentation</p>
          <h1>
            {displayValue.salutation} {displayValue.fullName}
          </h1>
        </div>
        <p className='quote'>Your Quote value is: {displayValue.amount}</p>
      </div>
    </Card>
  )
}

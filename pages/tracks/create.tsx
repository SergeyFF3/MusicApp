import FileUpload from '@/components/FileUpload';
import StepWrapper from '@/components/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import MainLayout from '../../layout/MainLayout';

export default function Create() {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const nextStep = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label="Название трека" />
            <TextField style={{ marginTop: 10 }} label="Имя исполнителя" />
            <TextField
              style={{ marginTop: 10 }}
              label="Текст трека"
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Загрузить изображение</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Загрузить аудио</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={prevStep}>
          Назад
        </Button>
        <Button onClick={nextStep}>Далее</Button>
      </Grid>
    </MainLayout>
  );
}

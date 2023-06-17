import FileUpload from '@/components/FileUpload';
import StepWrapper from '@/components/StepWrapper';
import { useInput } from '@/hooks/useInput';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import process from 'process';
import { useState } from 'react';
import MainLayout from '../../layout/MainLayout';

export default function Create() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState('');
  const [audio, setAudio] = useState('');
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const nextStep = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      // debugger;
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', picture);
      formData.append('audio', audio);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/tracks`, {
        method: 'POST',
        body: JSON.stringify(formData),
      })
        .then((res) => router.push('/tracks'))
        .catch((e) => console.log(e));
    }
  };

  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout title="Музыкальная площадка - Загрузить трек">
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField
              {...name}
              style={{ marginTop: 10 }}
              label="Название трека"
            />
            <TextField
              {...artist}
              style={{ marginTop: 10 }}
              label="Имя исполнителя"
            />
            <TextField
              {...text}
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
        <Button onClick={() => nextStep()}>Далее</Button>
      </Grid>
    </MainLayout>
  );
}

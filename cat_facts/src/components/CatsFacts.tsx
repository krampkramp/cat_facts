import React,{ useState }  from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import {getCatFacts} from '../services/CatServices';


const CatsFacts = () => {
    
    const [facts, setFacts] = useState<String[]>([]);

    const handleSearch = (e: number) => {
        let array:string[] = [];
        getCatFacts(e).then((res:any) => {
            if(e===1){
                const {text} = res;
                array.push(text);

            }else{
                res.map( (ft: any )=>{
                    const {text} = ft;
                    array.push(text);
                })
            }
            setFacts(array);
        });
  
    }
    return (
        <Grid container style={{padding: '10px', margin:'20px'}}>

            <Grid item xs={12}>
                <TextField
                    id="facts"
                    label="How many facts"
                    type="number"
                    InputProps={{ inputProps: { max: 10, min: 1  } }}
                    onChange={e => handleSearch(parseInt(e.target.value))}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                {facts && facts.map((fact,index) => (
                    <Grid key={`factN${index}`}>
                        <Card style={{border: '1px solid black'}}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {`Fact Number ${index+1}`}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {fact}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                    </Grid>
                ))}
            </Grid>
      </Grid>
    )
}

export default CatsFacts

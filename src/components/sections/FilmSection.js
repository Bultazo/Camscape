import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Film from '../../views/Film';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormatAlignCenter } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const useStyles = makeStyles({
    root: {
      backgroundColor:"#434349",
      width : 350,

    },
    media: {
      height: 140,
    },

    root2: {
        backgroundColor:"#434349",
        width : 400,
  
      },
  });
const FilmSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {


  const classes = useStyles();

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Une production cinématographique en quelques étapes',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  const sectionHeader2 = {
    title: 'Restez compétitif et lancez vous sur les réseaux sociaux!',
    paragraph: 'Catalogue de préstations :'

  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
  

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
               
    
              </div>
            </div>

            


            <div className={innerClasses}>
                <br />
                <br />

                

            <SectionHeader data={sectionHeader2} className="center-content" />

            <div className={tilesClasses} style={{marginRight:"19px"}} >


            <div className="tiles-item reveal-from-bottom"  >
            <Card className={classes.root}>
      <CardActionArea>
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" style={{color:"#6864fc"}}>
            Tarif alpha (150€)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
         
         <div >
             <br />
<CheckCircleIcon style={{color:"green"}} />
             <h6 style={{fontSize:15, color:"#6864fc"}}>-Très haute rentabilité engagement/prix </h6>      
<h6 style={{fontSize:15, color:"#6864fc"}}>-Parfait pour les nouvelles marques </h6>
         </div>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
            </div>
            

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
            <Card className={classes.root}>
      <CardActionArea>
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" style={{color:"#6864fc"}}>
            Tarif alpha (150€)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
         
         <div >
             <br />
<CheckCircleIcon style={{color:"green"}} />
             <h6 style={{fontSize:15, color:"#6864fc"}}>-Très haute rentabilité engagement/prix </h6>      
<h6 style={{fontSize:15, color:"#6864fc"}}>-Parfait pour les nouvelles marques </h6>
         </div>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
            <Card className={classes.root}>
      <CardActionArea>
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" style={{color:"#6864fc"}}>
            Tarif alpha (150€)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
         
         <div >
             <br />
<CheckCircleIcon style={{color:"green"}} />
             <h6 style={{fontSize:15, color:"#6864fc"}}>-Très haute rentabilité engagement/prix </h6>      
<h6 style={{fontSize:15, color:"#6864fc"}}>-Parfait pour les nouvelles marques </h6>
         </div>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
            </div>
            </div>

          </div>
    </section>
  );
}

FilmSection.propTypes = propTypes;
FilmSection.defaultProps = defaultProps;

export default FilmSection;
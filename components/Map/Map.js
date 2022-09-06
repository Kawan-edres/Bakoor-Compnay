import classes from './map.module.css'
const Map = () => {
    return (
        <div id='map' className={classes.mapContainer}>
           <iframe className={classes.map} title="our location on map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51478.031866824196!2d43.96609090244596!3d36.25462535745084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40071ee00768c4b7%3A0x433d567027e0e6c7!2sBakoor%20Company%20for%20General%20Trading%20%26%20Construction!5e0!3m2!1sen!2siq!4v1661891299093!5m2!1sen!2siq"    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    );
}

export default Map;
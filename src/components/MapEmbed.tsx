import './MapEmbed.css';

export default function MapEmbed() {
    return (
        <div className="map-embed">
            <iframe
                title="Aaroh Manufacturing Consultancy Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3783.98!2d73.806924!3d18.509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzMyLjUiTiA3M8KwNDgnMjQuOSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

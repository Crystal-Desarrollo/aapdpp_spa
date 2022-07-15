import { Card, IconText } from '../styles'
import { FaCalendarDay, FaClock, FaMapPin } from 'react-icons/fa'

export const EventInfo = ({ date, hour, ubication, descriptionEvent }) => {
    return (
        <>
            <Card>
                <h2>Fecha y lugar de encuentro</h2>
                {date && (
                    <IconText>
                        <FaCalendarDay />
                        {date}
                    </IconText>
                )}
                {hour && (
                    <IconText>
                        <FaClock />
                        {hour}
                    </IconText>
                )}
                {ubication && (
                    <IconText>
                        <FaMapPin />
                        {ubication}
                    </IconText>
                )}
            </Card>
            <br />
            <Card>
                <h2>Descripción</h2>

                {descriptionEvent && (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium necessitatibus soluta eos cupiditate
                        nisi alias.
                    </p>
                )}
            </Card>
        </>
    )
}

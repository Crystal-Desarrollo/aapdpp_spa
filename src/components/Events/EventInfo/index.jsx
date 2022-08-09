import { Card, IconText } from '../styles'
import { FaCalendarDay, FaClock, FaMapPin } from 'react-icons/fa'
import { Tabs } from '../Tabs'
import { useState } from 'react'

export const EventInfo = ({
    date = '01/09/1991',
    hour = '10:20',
    ubication = 'Ledesma',
    descriptionEvent = 'AAAAAAAAAAAAah'
}) => {
    const [tab, setTab] = useState(1)

    return (
        <>
            <Tabs tab={tab} setTab={setTab} />
            {tab === 1 && (
                <>
                    <Card maxWidth="1200px" padding="3rem">
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
                    <Card maxWidth="1200px" padding="3rem">
                        <h2>Descripción</h2>
                        {descriptionEvent && descriptionEvent}
                    </Card>
                </>
            )}
            {tab === 2 && 'Imagen'}
        </>
    )
}

import { Card, IconText } from '../styles'
import { FaCalendarDay, FaClock, FaMapPin } from 'react-icons/fa'
import { Tabs } from '../Tabs'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetEvent } from '../../../hooks/events/useGetEvent'
import moment from 'moment'
import { H2 } from '../../Common/Texts'

export const EventInfo = () => {
    const { id } = useParams()
    const [tab, setTab] = useState(1)
    const event = useGetEvent(id)

    return (
        <>
            <Tabs tab={tab} setTab={setTab} />
            {tab === 1 && (
                <>
                    <Card maxWidth="1200px" padding="3rem">
                        <H2>Fecha y lugar de encuentro</H2>
                        {event?.date && (
                            <IconText>
                                <FaCalendarDay />
                                {moment(event.date).format('D/MM/yyyy')}
                            </IconText>
                        )}
                        {event?.date && (
                            <IconText>
                                <FaClock />
                                {moment(event.date).format('h:mm a')}
                            </IconText>
                        )}
                        {event?.location && (
                            <IconText>
                                <FaMapPin />
                                {event.location}
                            </IconText>
                        )}
                    </Card>
                    <br />
                    <Card maxWidth="1200px" padding="3rem">
                        <H2>Descripción</H2>
                        {event?.description}
                    </Card>
                </>
            )}
            {tab === 2 && 'Imagen'}
        </>
    )
}

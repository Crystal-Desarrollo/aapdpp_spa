import { Card, IconText } from '../styles'
import { FaCalendarDay, FaClock, FaMapPin } from 'react-icons/fa'
import { Tabs } from '../Tabs'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetEvent } from '../../../hooks/events/useGetEvent'
import moment from 'moment'
import { H2 } from '../../Common/Texts'
import { Grid } from '../../Common/Grid'
import { FileCard, mapExtensionToType } from '../../Files'
import { getFileExtension } from '../../../utils/files'
import { Section } from '../../Common/Section'

export const EventInfo = () => {
    const { id } = useParams()
    const [tab, setTab] = useState(1)
    const [event] = useGetEvent(id)

    return (
        <Section>
            <Tabs tab={tab} setTab={setTab} />
            {tab === 1 && (
                <>
                    <Card padding="3rem">
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
                    <Card padding="3rem">
                        <H2>Descripción</H2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: event?.description
                            }}
                        ></p>
                    </Card>
                </>
            )}
            {tab === 2 && (
                <Card padding="3rem">
                    <H2>Archivos</H2>
                    <Grid>
                        {event?.files &&
                            event.files.length > 0 &&
                            event.files.map(file => {
                                return (
                                    <FileCard
                                        key={file.id}
                                        downloadName={file.original_name}
                                        downloadUrl={file.path}
                                        type={mapExtensionToType(
                                            getFileExtension(file.name)
                                        )}
                                    />
                                )
                            })}
                    </Grid>
                </Card>
            )}
        </Section>
    )
}

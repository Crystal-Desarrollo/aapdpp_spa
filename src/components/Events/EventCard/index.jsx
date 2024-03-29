import moment from 'moment'
import { Link } from 'react-router-dom'
import { Card, Description, Flex, IconText } from '../styles'
import { Button } from '../../Common/Inputs/Button'
import { FaCalendarDay, FaMapPin, FaClock } from 'react-icons/fa'

export const EventCard = ({ event }) => {
    const { id, date, location, description } = event

    return (
        <Card justifyContent="space-between">
            <Flex flexDirection="column">
                <Flex>
                    {date && (
                        <IconText>
                            <FaCalendarDay />
                            {moment(date).format('D/MM/yyyy')}
                        </IconText>
                    )}
                    -
                    {date && (
                        <IconText>
                            <FaClock />
                            {moment(date).format('h:mm a')}
                        </IconText>
                    )}
                </Flex>
                {location && (
                    <IconText>
                        <FaMapPin />
                        {location}
                    </IconText>
                )}
                {description && (
                    <Description
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></Description>
                )}
            </Flex>

            <Button
                as={Link}
                to={`/eventos/${id}`}
                style={{ width: '100%', textAlign: 'center' }}
            >
                Conocer más
            </Button>
        </Card>
    )
}

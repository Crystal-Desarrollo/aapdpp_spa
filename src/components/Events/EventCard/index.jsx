import { Link } from 'react-router-dom'
import { Card, Flex, IconText } from '../styles'
import { Button } from '../../Common/Inputs/Button'
import { FaCalendarDay, FaClock, FaMapPin } from 'react-icons/fa'

export const EventCard = ({ date, hour, ubication, descriptionEvent }) => {
    return (
        <Card>
            <Flex>
                {date && (
                    <IconText>
                        <FaCalendarDay />
                        {date}
                    </IconText>
                )}
                -
                {hour && (
                    <IconText>
                        <FaClock />
                        {hour}
                    </IconText>
                )}
            </Flex>
            {ubication && (
                <IconText>
                    <FaMapPin />
                    {ubication}
                </IconText>
            )}
            {descriptionEvent && <p>{descriptionEvent}</p>}

            <Button
                as={Link}
                to="/noticias"
                style={{ width: '100%', textAlign: 'center' }}
            >
                Conocer más
            </Button>
        </Card>
    )
}

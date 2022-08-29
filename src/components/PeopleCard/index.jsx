import {
    Card,
    FlexColumn,
    FlexRow,
    ImagenContainer,
    IsActive,
    Joined,
    Name
} from './styles'

export const PeopleCard = ({
    profilePicture,
    name,
    joined,
    isActive,
    description = true
}) => {
    return (
        <Card flexDirection="column" hover>
            <FlexRow justifyContent={isActive ? 'flex-start' : 'space-between'}>
                {profilePicture && (
                    <ImagenContainer>
                        <img src={profilePicture} alt="Foto de una persona" />
                    </ImagenContainer>
                )}
                <FlexColumn>
                    {name && <Name title={name}>{name}</Name>}
                    {/* {joined && <Joined title={joined}>{joined}</Joined>} */}
                </FlexColumn>
                {!isActive && <IsActive title="Inactivo">Inactivo</IsActive>}
            </FlexRow>
            {description && (
                <p>
                    Lorem Ipsum is simply dummy text of the printing asd asd asd
                    asd asd asdss.
                </p>
            )}
        </Card>
    )
}

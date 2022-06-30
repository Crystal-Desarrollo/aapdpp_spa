import { LoaderStyled } from './styles'
export const Loader = ({ backgroundEnabled = true, float = true }) => {
    return (
        <LoaderStyled backgroundEnabled={backgroundEnabled} float={float}>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoaderStyled>
    )
}

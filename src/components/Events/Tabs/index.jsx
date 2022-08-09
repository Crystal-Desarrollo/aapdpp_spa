import React from 'react'
import { Tab } from './styles'

export const Tabs = ({ tab = 1, setTab }) => {
    return (
        <Tab>
            <div onClick={() => setTab(1)}>
                <p className={tab === 1 ? 'active' : ''}>Informacion</p>
                <div className={tab === 1 ? 'active' : ''} />
            </div>
            <div onClick={() => setTab(2)}>
                <p className={tab === 2 ? 'active' : ''}>Archivos</p>
                <div className={tab === 2 ? 'active' : ''} />
            </div>
        </Tab>
    )
}

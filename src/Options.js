import React from 'react'

export default function Options() {
    const values = []

    for (let i = 1; i <= 10; i++) {
        values.push(i)
    }


    return (
        values.map(value => {
            return <option value={value} key={value}>{value}</option>
        })
    )
}

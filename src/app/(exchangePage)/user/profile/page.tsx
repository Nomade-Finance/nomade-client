"use client"

import React from 'react'
import withAuth from '@/lib/withAuth'; // Import the withAuth HOC

function page() {
    return (
        <div>
            Mon Profile
        </div>
    )
}
export default withAuth(page)
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function MyComponent({ children, active }) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(active)
    }, [active])

    return (
        <motion.div className="h-100"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
            {children}
        </motion.div>
    )
}
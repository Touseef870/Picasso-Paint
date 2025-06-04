
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Separator } from "../../components/ui/separator"
import { Palette, RotateCcw, Download, Share2, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"

const colorPalette = [
    { name: "Warm Beige", color: "#F5DEB3", category: "neutral" },
    { name: "Cool Gray", color: "#A8A8A8", category: "neutral" },
    { name: "Soft Cream", color: "#F5F5DC", category: "neutral" },
    { name: "Blush Pink", color: "#FFB6C1", category: "warm" },
    { name: "Sage Green", color: "#9CAF88", category: "cool" },
    { name: "Peach", color: "#FFCBA4", category: "warm" },
    { name: "Sky Blue", color: "#87CEEB", category: "cool" },
    { name: "Lavender", color: "#E6E6FA", category: "cool" },

    { name: "Coral", color: "#FF7F50", category: "warm" },
    { name: "Teal", color: "#008080", category: "cool" },
    { name: "Mint", color: "#98FB98", category: "cool" },
    { name: "Hot Pink", color: "#FF69B4", category: "warm" },
    { name: "Turquoise", color: "#40E0D0", category: "cool" },
    { name: "Sunshine", color: "#FFD700", category: "warm" },
    { name: "Forest", color: "#228B22", category: "cool" },
    { name: "Royal Blue", color: "#4169E1", category: "cool" },

    { name: "Crimson", color: "#DC143C", category: "warm" },
    { name: "Charcoal", color: "#36454F", category: "neutral" },
    { name: "Pure White", color: "#FFFFFF", category: "neutral" },
    { name: "Deep Black", color: "#000000", category: "neutral" },
]


export default function Component() {
    const [selectedColor, setSelectedColor] = useState(colorPalette[3]) // Blush Pink
    const [activeWall, setActiveWall] = useState("left")
    const [wallColors, setWallColors] = useState({
        left: "#E8E8E8",
        right: "#E8E8E8",
        back: "#F5F5F5",
    })
    const [isAnimating, setIsAnimating] = useState(false)

    const handleColorSelect = (color) => {
        setSelectedColor(color)
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 300)
    }

    const handleWallClick = (wall) => {
        setActiveWall(wall)
        setWallColors((prev) => ({
            ...prev,
            [wall]: selectedColor.color,
        }))
    }

    const resetRoom = () => {
        setWallColors({
            left: "#E8E8E8",
            right: "#E8E8E8",
            back: "#F5F5F5",
        })
        setActiveWall("left")
    }

    const getWallName = (wall) => {
        switch (wall) {
            case "left":
                return "Left Wall"
            case "right":
                return "Right Wall"
            case "back":
                return "Back Wall"
            default:
                return "Wall"
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Room Color Designer
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">Transform your space with our interactive color palette</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Room Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2"
                    >
                        <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur">
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        <Palette className="w-5 h-5 text-purple-600" />
                                        Room Preview
                                    </CardTitle>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" onClick={resetRoom}>
                                            <RotateCcw className="w-4 h-4 mr-1" />
                                            Reset
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Download className="w-4 h-4 mr-1" />
                                            Save
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Share2 className="w-4 h-4 mr-1" />
                                            Share
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                {/* Realistic Room Container */}
                                <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-inner">
                                    {/* Room Container with 3D Perspective */}
                                    <div className="absolute inset-0" style={{ perspective: "1000px" }}>
                                        {/* Realistic Room */}
                                        <div className="relative w-full h-full overflow-hidden">
                                            {/* Floor */}
                                            <div
                                                className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-amber-100 to-amber-50"
                                                style={{
                                                    transform: "rotateX(75deg)",
                                                    transformOrigin: "bottom",
                                                    boxShadow: "0 -10px 30px rgba(0,0,0,0.15) inset",
                                                }}
                                            >
                                                {/* Floor Pattern */}
                                                <div
                                                    className="absolute inset-0 opacity-10"
                                                    style={{
                                                        backgroundImage:
                                                            "repeating-linear-gradient(90deg, #8B4513, #8B4513 2px, transparent 2px, transparent 40px), repeating-linear-gradient(0deg, #8B4513, #8B4513 1px, transparent 1px, transparent 200px)",
                                                    }}
                                                />
                                            </div>

                                            {/* Back Wall */}
                                            <motion.div
                                                className="absolute top-[5%] left-[25%] right-[25%] h-[60%] cursor-pointer border border-gray-200"
                                                style={{
                                                    backgroundColor: wallColors.back,
                                                    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                                                }}
                                                whileHover={{ filter: "brightness(1.05)" }}
                                                whileTap={{ filter: "brightness(0.95)" }}
                                                onClick={() => handleWallClick("back")}
                                                animate={
                                                    activeWall === "back"
                                                        ? {
                                                            boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
                                                            borderColor: selectedColor.color,
                                                        }
                                                        : {}
                                                }
                                            >
                                                {/* Window */}
                                                <div className="absolute top-[20%] right-[15%] w-[30%] h-[35%] border-4 border-white rounded-sm shadow-lg overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-100">
                                                        {/* Window Frame */}
                                                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1">
                                                            <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
                                                            <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
                                                            <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
                                                            <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
                                                        </div>
                                                        {/* Window Sill */}
                                                        <div className="absolute bottom-[-8px] left-[-8px] right-[-8px] h-[12px] bg-white rounded-sm shadow-sm"></div>
                                                    </div>
                                                </div>

                                                {/* Picture Frame */}
                                                <div className="absolute bottom-[25%] left-[20%] w-[20%] h-[25%] bg-amber-50 border-4 border-amber-800 shadow-md">
                                                    <div className="absolute inset-2 bg-green-200"></div>
                                                </div>
                                            </motion.div>

                                            {/* Left Wall - Much Bigger and More Visible */}
                                            <motion.div
                                                className="absolute top-[5%] left-0 w-[25%] h-[60%] cursor-pointer border border-gray-200"
                                                style={{
                                                    backgroundColor: wallColors.left,
                                                    transform: "rotateY(45deg)",
                                                    transformOrigin: "right center",
                                                    boxShadow: "10px 5px 20px rgba(0,0,0,0.15) inset",
                                                }}
                                                whileHover={{ filter: "brightness(1.05)" }}
                                                whileTap={{ filter: "brightness(0.95)" }}
                                                onClick={() => handleWallClick("left")}
                                                animate={
                                                    activeWall === "left"
                                                        ? {
                                                            boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
                                                            borderColor: selectedColor.color,
                                                        }
                                                        : {}
                                                }
                                            >
                                                {/* Wall Decoration - Light Switch */}
                                                <div className="absolute bottom-[30%] right-[20%] w-[15%] h-[8%] bg-white border border-gray-300 rounded-sm shadow-sm">
                                                    <div className="absolute inset-1 bg-gray-100 rounded-sm"></div>
                                                </div>
                                            </motion.div>

                                            {/* Right Wall - Much Bigger and More Visible */}
                                            <motion.div
                                                className="absolute top-[5%] right-0 w-[25%] h-[60%] cursor-pointer border border-gray-200"
                                                style={{
                                                    backgroundColor: wallColors.right,
                                                    transform: "rotateY(-45deg)",
                                                    transformOrigin: "left center",
                                                    boxShadow: "-10px 5px 20px rgba(0,0,0,0.15) inset",
                                                }}
                                                whileHover={{ filter: "brightness(1.05)" }}
                                                whileTap={{ filter: "brightness(0.95)" }}
                                                onClick={() => handleWallClick("right")}
                                                animate={
                                                    activeWall === "right"
                                                        ? {
                                                            boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
                                                            borderColor: selectedColor.color,
                                                        }
                                                        : {}
                                                }
                                            >
                                                {/* Wall Decoration - Small Shelf */}
                                                <div className="absolute top-[25%] left-[15%] w-[60%] h-[4%] bg-amber-800 rounded-sm shadow-md">
                                                    <div className="absolute top-[-50%] left-[10%] right-[10%] h-[50%] bg-amber-700 rounded-sm"></div>
                                                </div>
                                            </motion.div>

                                            {/* Ceiling */}
                                            <div
                                                className="absolute top-0 left-0 right-0 h-[8%] bg-white border-b border-gray-200"
                                                style={{
                                                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                                                }}
                                            >
                                                {/* Ceiling Light */}
                                                <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-100 rounded-full border-2 border-yellow-200 shadow-lg">
                                                    <div className="absolute inset-1 bg-yellow-50 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Furniture - Sofa */}
                                            <div
                                                className="absolute bottom-[35%] left-[30%] right-[30%] h-[12%] bg-gray-700 rounded-md shadow-lg"
                                                style={{
                                                    filter: "blur(0.5px)",
                                                    transform: "perspective(500px) rotateX(10deg)",
                                                }}
                                            >
                                                {/* Sofa Back */}
                                                <div className="absolute top-[-60%] left-[5%] right-[5%] h-[80%] bg-gray-600 rounded-t-md"></div>
                                                {/* Sofa Arms */}
                                                <div className="absolute top-[-40%] left-0 w-[20%] h-[60%] bg-gray-650 rounded-md"></div>
                                                <div className="absolute top-[-40%] right-0 w-[20%] h-[60%] bg-gray-650 rounded-md"></div>
                                                {/* Cushions */}
                                                <div className="absolute top-[-20%] left-[25%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
                                                <div className="absolute top-[-20%] left-[45%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
                                                <div className="absolute top-[-20%] right-[25%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
                                            </div>

                                            {/* Coffee Table */}
                                            <div
                                                className="absolute bottom-[35%] left-[40%] right-[40%] h-[6%] bg-amber-800 rounded-sm shadow-md"
                                                style={{
                                                    filter: "blur(0.5px)",
                                                    transform: "perspective(500px) rotateX(15deg)",
                                                }}
                                            >
                                                {/* Table Legs */}
                                                <div className="absolute bottom-[-100%] left-[10%] w-[5%] h-[100%] bg-amber-900"></div>
                                                <div className="absolute bottom-[-100%] right-[10%] w-[5%] h-[100%] bg-amber-900"></div>
                                            </div>

                                            {/* Floor Lamp */}
                                            <div
                                                className="absolute bottom-[35%] right-[28%] w-[3%] h-[25%] bg-gray-800"
                                                style={{ filter: "blur(0.5px)" }}
                                            >
                                                <div className="absolute top-0 left-[-100%] right-[-100%] h-[25%] bg-amber-100 rounded-full border border-amber-200"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Active Wall Indicator */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        <Badge variant="secondary" className="bg-white/90 backdrop-blur">
                                            Painting: {getWallName(activeWall)}
                                        </Badge>

                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white/80">
                                                        <Info className="h-4 w-4" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Click on any wall to apply the selected color</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Color Palette */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
                            <CardHeader>
                                <CardTitle className="text-lg">Color Palette</CardTitle>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">Selected:</span>
                                    <motion.div
                                        className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50"
                                        animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
                                    >
                                        <div
                                            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                                            style={{ backgroundColor: selectedColor.color }}
                                        />
                                        <span className="text-sm font-medium">{selectedColor.name}</span>
                                    </motion.div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Neutral Colors */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Neutral Tones</h4>
                                    <div className="grid grid-cols-4 gap-2">
                                        {colorPalette
                                            .filter((c) => c.category === "neutral")
                                            .map((color, index) => (
                                                <motion.button
                                                    key={color.name}
                                                    className="relative w-12 h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
                                                    style={{ backgroundColor: color.color }}
                                                    onClick={() => handleColorSelect(color)}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <AnimatePresence>
                                                        {selectedColor.name === color.name && (
                                                            <motion.div
                                                                className="absolute inset-0 rounded-lg border-3 border-purple-500"
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                exit={{ opacity: 0, scale: 0.8 }}
                                                            />
                                                        )}
                                                    </AnimatePresence>
                                                </motion.button>
                                            ))}
                                    </div>
                                </div>

                                <Separator />

                                {/* Warm Colors */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Warm Colors</h4>
                                    <div className="grid grid-cols-4 gap-2">
                                        {colorPalette
                                            .filter((c) => c.category === "warm")
                                            .map((color, index) => (
                                                <motion.button
                                                    key={color.name}
                                                    className="relative w-12 h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
                                                    style={{ backgroundColor: color.color }}
                                                    onClick={() => handleColorSelect(color)}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: (index + 4) * 0.05 }}
                                                >
                                                    <AnimatePresence>
                                                        {selectedColor.name === color.name && (
                                                            <motion.div
                                                                className="absolute inset-0 rounded-lg border-3 border-purple-500"
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                exit={{ opacity: 0, scale: 0.8 }}
                                                            />
                                                        )}
                                                    </AnimatePresence>
                                                </motion.button>
                                            ))}
                                    </div>
                                </div>

                                <Separator />

                                {/* Cool Colors */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Cool Colors</h4>
                                    <div className="grid grid-cols-4 gap-2">
                                        {colorPalette
                                            .filter((c) => c.category === "cool")
                                            .map((color, index) => (
                                                <motion.button
                                                    key={color.name}
                                                    className="relative w-12 h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
                                                    style={{ backgroundColor: color.color }}
                                                    onClick={() => handleColorSelect(color)}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: (index + 8) * 0.05 }}
                                                >
                                                    <AnimatePresence>
                                                        {selectedColor.name === color.name && (
                                                            <motion.div
                                                                className="absolute inset-0 rounded-lg border-3 border-purple-500"
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                exit={{ opacity: 0, scale: 0.8 }}
                                                            />
                                                        )}
                                                    </AnimatePresence>
                                                </motion.button>
                                            ))}
                                    </div>
                                </div>

                                {/* Instructions */}
                                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                                    <p className="text-sm text-gray-700">
                                        <strong>How to use:</strong> Select a color from the palette, then click on any wall in the room to
                                        apply the color. Use the reset button to start over.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

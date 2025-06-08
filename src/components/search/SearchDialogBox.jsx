import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function SearchDialogBox({
    isOpen,
    setIsOpen,
    title = "Search",
    placeholder = "Search...",
    filteredData = [],
    onSearchQueryChange,
    searchQuery = "",
    loading = false,
    navigateTo = "/product",
}) {
    const [inputValue, setInputValue] = useState(searchQuery);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Sync with external searchQuery changes
    useEffect(() => {
        setInputValue(searchQuery);
    }, [searchQuery]);

    // Immediate search on input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onSearchQueryChange(value);
    };

    // Auto-focus and scroll into view when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => {
                inputRef.current.focus();
                inputRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }, 100);
        }
    }, [isOpen]);

    const handleNavigate = (id) => {
        console.log('Navigating to product:', id);
        setIsOpen(false);
        navigate(`${navigateTo}/${id}`);
        console.log('Navigation complete');
    };

    // Function to get initials for Avatar fallback
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[500px] max-h-[80dvh] p-0 overflow-hidden flex flex-col">
                <DialogHeader className="px-4 pt-4 pb-2">
                    <DialogTitle className="text-lg">{title}</DialogTitle>
                </DialogHeader>

                <div className="sticky top-0 z-10 bg-background px-4 pb-2 pt-1 border-b">
                    <Input
                        ref={inputRef}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-full"
                        autoFocus
                    />
                </div>

                <div className="overflow-y-auto flex-grow px-4 pt-2">
                    {loading ? (
                        <div className="space-y-4 pb-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="border rounded-lg p-4 flex gap-3">
                                    <Skeleton className="h-12 w-12 rounded-full" />
                                    <div className="flex-1 space-y-2">
                                        <Skeleton className="h-4 w-3/4" />
                                        <Skeleton className="h-3 w-full" />
                                        <Skeleton className="h-3 w-2/3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : inputValue.length > 0 ? (
                        filteredData.length > 0 ? (
                            <div className="space-y-3 pb-4">
                                {filteredData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="border cursor-pointer rounded-lg p-3 hover:bg-accent transition-colors flex gap-3 items-center"
                                        onClick={() => handleNavigate(item.id)}
                                    >
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage
                                                src={item.image}
                                                alt={item.name}
                                                className="object-cover"
                                            />
                                            <AvatarFallback className="bg-muted text-muted-foreground">
                                                {item.name ? getInitials(item.name) : "NA"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-base truncate">{item.name}</h3>
                                            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-8">
                                <Avatar className="h-16 w-16 mb-4">
                                    <AvatarFallback className="bg-muted">
                                        <span className="text-xl">?</span>
                                    </AvatarFallback>
                                </Avatar>
                                <p className="text-muted-foreground">No results found</p>
                                <p className="text-muted-foreground text-sm mt-1">
                                    Try different keywords
                                </p>
                            </div>
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8">
                            <Avatar className="h-16 w-16 mb-4">
                                <AvatarFallback className="bg-muted">
                                    <span className="text-xl">🔍</span>
                                </AvatarFallback>
                            </Avatar>
                            <p className="text-muted-foreground">Start typing to search</p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
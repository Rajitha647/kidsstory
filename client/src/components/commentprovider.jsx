import { createContext, useState } from "react";

// Export the context
 const CommentContext = createContext();

// CommentProvider component
export const CommentProvider = ({ children }) => {
    const [comment, setComment] = useState("");

    return (
        <CommentContext.Provider value={{comment, setComment}}>
            {children}
        </CommentContext.Provider>
    );
};
export default CommentContext;

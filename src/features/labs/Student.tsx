import * as React from 'react';
import { Student, LoginPayload } from '../../models';
// import { Student } from '../../models/student';

export interface StudentCardProps {
    student: Student
    onClick?: (student: Student) => void
}


export function StudentCard({ student, onClick }: StudentCardProps) {
    let { name, isHero } = student

    function handleClick() {
        onClick?.(student)
    }
    return (
        <div onClick={handleClick}>
            Student: {name}{isHero ? 'HERO' : 'no-Hero'}
        </div>
    );
}

//named export
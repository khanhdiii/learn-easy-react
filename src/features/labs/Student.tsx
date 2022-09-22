import * as React from 'react';
import { Student, LoginPayload } from '../../models';
// import { Student } from '../../models/student';

export interface StudentCardProps {
    student: Student
}

// Props are READ ONLY
// DO NOT MUTATE Props
// Props are immutable

export function StudentCard({ student }: StudentCardProps) {
    let { name, isHero } = student

    // name = 'Bob'
    function handleClick() {
        student.name = 'Bob'
        console.log(student);
        // -not trigger re-render
        // - inconsistent data
    }
    return (
        <div onClick={handleClick}>
            Student: {name}{isHero ? 'HERO' : 'no-Hero'}
        </div>
    );
}

//named export
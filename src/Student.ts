/**
 * Модуль студента
 * @packageDocumentation
 */

import { BaseUser, BaseUserProps } from './User';

/**
 * Параметры конструктора класса Student
 */
export interface StudentProps extends BaseUserProps {
    /**
     * Университет студента
     */
    university: string;
}

/**
 * Класс студента
 */
export class Student extends BaseUser {
    /**
     * Университет студента
     */
    university: string;

    /**
     * Спит ли сейчас студент
     */
    private isSleeping: boolean;

    /**
     * Ключ таймера на сон
     */
    private sleepIntervalKey: number | null = null;

    /**
     * @param props — параметры конструктора класса Student
     */
    constructor(props: StudentProps) {
        super(props);

        this.university = props.university;
    }

    sleep(delay: string): void {
        if (this.sleepIntervalKey !== )
    }
}

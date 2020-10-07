/**
 * Модуль студента
 * @packageDocumentation
 */

import { BaseUser, BaseUserProps, SexKind } from './User';

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
    private sleepIntervalKey: any | null = null;

    /**
     * @param props — параметры конструктора класса Student
     */
    constructor(props: StudentProps) {
        super(props);

        this.university = props.university;
    }

    /**
     * Уйти в сон
     * @param duration продолжительность сна
     *
     * если пол студента [[SexKind.male]], реальная продолжительность сна в два раза больше
     */
    sleep(duration: number): void {
        if (this.sleepIntervalKey !== null) {
            return null;
        }

        const realSleepDuration = this.sex === SexKind.male ? duration * 2 : duration;

        this.isSleeping = true;
        this.sleepIntervalKey = setInterval(() => {
            this.isSleeping = false;
            this.sleepIntervalKey = null;
        }, realSleepDuration);
    }

    /**
     * Возвращает true, если студент спит
     */
    getIsSleeping(): boolean {
        return this.isSleeping;
    }
}

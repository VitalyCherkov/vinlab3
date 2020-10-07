/**
 * Модуль базового пользователя
 * @packageDocumentation
 */

/**
 * Пол пользователя
 */
export enum SexKind {
    /**
     * мужской
     */
    male = 'male',
    /**
     * женский
     */
    female = 'female'
}

/**
 * Параметры конструктора класса BaseUser
 */
export interface BaseUserProps {
    /**
     * имя пользователя
     */
    firstName: string;

    /**
     * фамилия пользователя
     */
    lastName: string;

    /**
     * Пол пользователя
     */
    sex: SexKind | null;
}

/**
 * Класс базового пользователя
 */
export class BaseUser {
    /**
     * имя пользователя
     */
    firstName: string;

    /**
     * фамилия пользователя
     */
    lastName: string;

    /**
     * Пол пользователя
     */
    sex: SexKind | null;

    /**
     * @param props - параметры класса BaseUser
     */
    constructor(props: BaseUserProps) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.sex = props.sex;
    }

    /**
     * Выводит в консоль значение, возвращаемое методом `getFullName`
     */
    printFullName(): void {
        console.log(this.getFullName());
    }

    /**
     * @returns Возвращает полное имя человека в формате `{Имя} {Фамилия}`
     * 
     * Пример:
     * _Иванов Иван_
     */
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}


